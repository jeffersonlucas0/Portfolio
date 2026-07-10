document.getElementById('year').textContent = new Date().getFullYear();

  // navegação por tabs
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('main section');

  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      const target = document.getElementById(tab.dataset.target);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const setActive = (id)=>{
    tabs.forEach(t=> t.classList.toggle('active', t.dataset.target === id));
  };

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        if(entry.target.tagName === 'SECTION') setActive(entry.target.id);
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));
  sections.forEach(sec=> observer.observe(sec));