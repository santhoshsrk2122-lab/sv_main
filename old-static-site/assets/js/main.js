const SV = path => 'https://www.svgroups.in/' + encodeURI(path);
const $ = id => document.getElementById(id);
const arrow = '<svg class="ic" style="width:14px;height:14px"><use href="#i-arrow"/></svg>';
const pin = '<svg class="ic"><use href="#i-pin"/></svg>';

const projects = [
  {type:'Apartments', name:'SV Polaris', url:'sv-polaris.html', loc:'Panathur, Marathahalli, Bangalore', img:'images/Frame 128.jpg', beds:'2 & 3 BHK', units:'231 Flats · 3 Blocks',
    docs:[['Brochure','asset/brochureUpdated.pdf'],['Master Plan','asset/updatedmasterplan.png'],['Floor Plan','asset/floorPlanUpdated3&2bhk.png']]},
  {type:'Apartments', name:'SV Grandur', url:'sv-grandur.html', loc:'Electronic City Phase 2, Bangalore', img:'images/Frame 99.jpg', beds:'2 & 3 BHK', units:'82% Open Space',
    docs:[['Master Plan','images/Master Plan.png']]}
];
const docUrl = u => u.startsWith('http') ? u : SV(u);

// Featured project cards
const grid = $('projGrid');
if (grid) grid.innerHTML = projects.map((p,i)=>`
  <article class="proj reveal d${i%3}">
    <a class="proj-img" href="${p.url}"><img src="${SV(p.img)}" alt="${p.name} — ${p.type} in ${p.loc}" loading="lazy"><span class="tag">${p.type}</span></a>
    <div class="proj-body">
      <div class="proj-loc">${pin}${p.loc}</div>
      <h3><a href="${p.url}">${p.name}</a></h3>
      <div class="proj-meta"><span><b>${p.beds}</b></span><span>${p.units}</span></div>
      <div class="proj-foot"><div class="price"><small>Apartments in</small>${p.loc.split(',')[0]}</div><a class="link-btn" href="${p.url}">View Project ${arrow}</a></div>
      <div class="proj-docs">${p.docs.map(([k,u])=>`<a href="${docUrl(u)}" target="_blank" rel="noopener">${k}</a>`).join('')}</div>
    </div>
  </article>`).join('');

// Completed projects gallery
const gallery = $('gallery');
if (gallery) {
  const completed = ['Frame 129','Frame 130','Frame 131','Frame 132','Frame 127','Frame 102','Frame 104','Frame 106','Frame 109','Frame 110','Frame 111','Frame 112','Frame 113'].map(f=>`images/SV_Groups_2.O/${f}.jpg`).concat('images/Frame 114 recent.jpg');
  const limit = +gallery.dataset.limit || completed.length;
  gallery.innerHTML = completed.slice(0, limit).map((src,i)=>`<img class="reveal d${i%4}" src="${SV(src)}" alt="Completed SV Groups project ${i+1}" loading="lazy">`).join('');
}

// Testimonials (data-limit shows a subset, data-more adds a toggle)
const reviews = [
  ['One of the best Quality construction apartment in Phase 2 Electronic City. Value for Money. Sales team members always respond for all queries.','S Satish'],
  ['Quality of construction is amazing. Sales team is well informed and able to help as required. They are making good progress.','Balagi Rajamanickam'],
  ['Excellent infrastructure and amenities. Construction Quality is very superior, the management and staff all are very co operative.','J C Ganesh Kumar'],
  ['Quality mind person & Construction quality is high and technology. The team is very polite & respectful to customers. Special thanks to the SV GROUPS team for bringing up the best property at an affordable price.','A Nagaraj'],
  ['Amazing infrastructure in SV GRANDUR and good work from SV GROUPS. Congratulations to the team and please continue to develop new projects for people’s benefit.','C Karthikeyan'],
  ['This place is good from outside and inside. Flats are super with ventilation. I like the flats. The Best apartment I Have visited so far. Very well built.','S Raghavendra Rao'],
  ['Nice Society. Looks very modern with all amenities. Management is very friendly and helpful.','Karthik Krishna Arige'],
  ['Very good construction quality and nice sales team. The quality of the work done is clearly better than many apartments around the area and equivalent to top builders in Bangalore.','M Muthiah'],
  ['I liked the construction quality and behavior. I went on the occasion of Temple inauguration day and booked it within 2 days. Construction quality is very good.','Som Nath Mishra'],
  ['One of the best constructions in electronic city. Decent amenities to live, active society, good amount of greenery around, no tall constructions in proximity.','Sai Teja Singamshetty'],
  ['Very good apartment located in a calm environment with all the amenities. The football ground is the special one for children to play. There is a temple inside the complex also. The marketing team is extremely good. They helped me throughout the process.','Sukanta Rout'],
  ['It’s one of the best properties in Bangalore. Building quality and maintenance has been top notch and also the completion of amenities are on time and they stick to their promises and adhere to it.','Allwyn'],
  ['This is the largest carpet area provided by any builder for a 2BHK. It is in a very prime location and connectivity is very good. Construction quality is very nice and worth buying it here.','Vignesh A'],
  ['Nice project with all Amenities like Club House, Jogging Track, Children\'s Play Area and Security System was super nice. Looking at the location and quality of the project is very nice and excited to enter.','Sainath'],
  ['After visiting 10-12 properties in bangalore my wife and I decided to take SV only. Because Quality of SV is very different from others.','Amarjeet'],
  ['Construction Quality, Open Spaces are excellent. The SV team approach is very cordial. Location is also very close to Hosur Road.','Umashankar T']
];
const testiGrid = $('testiGrid');
if (testiGrid) {
  const limit = +testiGrid.dataset.limit || reviews.length;
  const initials = n => (w=>w.length>1?w[0][0]+w[w.length-1][0]:w[0][0])(n.split(' '));
  testiGrid.innerHTML = reviews.slice(0, limit).map(([q,n],i)=>`
    <figure class="review reveal d${i%3}">
      <span class="quote">&rdquo;</span>
      <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote>${q}</blockquote>
      <figcaption class="reviewer"><span class="avatar" aria-hidden="true">${initials(n)}</span><div><strong>${n}</strong><span>SV Groups Customer</span></div></figcaption>
    </figure>`).join('');
}

// Lightbox for any image inside [data-lightbox]
const lbGroups = document.querySelectorAll('[data-lightbox]');
if (lbGroups.length) {
  const lb = document.createElement('div');
  lb.className = 'lightbox'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true'); lb.setAttribute('aria-label','Image viewer');
  lb.innerHTML = '<button class="lb-btn lb-close" aria-label="Close">×</button><button class="lb-btn lb-prev" aria-label="Previous">‹</button><img alt=""><button class="lb-btn lb-next" aria-label="Next">›</button><span class="lb-count"></span>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img'), lbCount = lb.querySelector('.lb-count');
  let set = [], idx = 0;
  const show = n => { idx = (n+set.length)%set.length; lbImg.src = set[idx].src; lbImg.alt = set[idx].alt; lbCount.textContent = `${idx+1} / ${set.length}`; };
  const close = () => { lb.classList.remove('open'); document.body.style.overflow=''; };
  lbGroups.forEach(g=>g.addEventListener('click', e=>{
    const img = e.target.closest('img'); if(!img) return;
    set = [...g.querySelectorAll('img')]; show(set.indexOf(img));
    lb.classList.add('open'); document.body.style.overflow='hidden';
  }));
  lb.querySelector('.lb-close').onclick = close;
  lb.querySelector('.lb-prev').onclick = () => show(idx-1);
  lb.querySelector('.lb-next').onclick = () => show(idx+1);
  lb.addEventListener('click', e=>{ if(e.target===lb) close(); });
  document.addEventListener('keydown', e=>{
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') close(); else if(e.key==='ArrowLeft') show(idx-1); else if(e.key==='ArrowRight') show(idx+1);
  });
}

// Nav
const nav = $('nav'), toTop = $('toTop');
const onScroll = ()=>{ nav.classList.toggle('scrolled', scrollY>40); toTop.classList.toggle('show', scrollY>700); };
addEventListener('scroll', onScroll, {passive:true}); onScroll();
toTop.onclick = ()=>scrollTo({top:0});
const burger = $('burger'), links = $('navLinks');
const setMenu = o => { links.classList.toggle('open', o); burger.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); };
burger.onclick = ()=>setMenu(!links.classList.contains('open'));
links.addEventListener('click', e=>{ if(e.target.closest('a')) setMenu(false); });

// Hero slider (home page)
const slides = document.querySelectorAll('#heroSlides img'), dots = document.querySelectorAll('#heroDots button');
if (slides.length > 1) {
  let cur = 0, timer;
  const go = n=>{ slides[cur].classList.remove('active'); dots[cur].classList.remove('active'); cur = (n+slides.length)%slides.length; slides[cur].classList.add('active'); dots[cur].classList.add('active'); };
  const auto = ()=>{ clearInterval(timer); timer = setInterval(()=>go(cur+1), 6000); };
  dots.forEach((d,i)=>d.onclick=()=>{ go(i); auto(); }); auto();
}

// Reveal + counters
const io = new IntersectionObserver(entries=>entries.forEach(en=>{
  if(!en.isIntersecting) return;
  en.target.classList.add('in');
  en.target.querySelectorAll('[data-count]').forEach(el=>{
    const end = +el.dataset.count, t0 = performance.now(), dur = 1800;
    const tick = t=>{ const k = Math.min((t-t0)/dur,1); el.textContent = Math.floor(end*(1-Math.pow(1-k,3))).toLocaleString('en-IN'); if(k<1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
  io.unobserve(en.target);
}), {threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Enquiry forms (any page); ?project= preselects the dropdown
const wanted = new URLSearchParams(location.search).get('project');
document.querySelectorAll('.enquiry-form').forEach(f=>{
  if (wanted && f.service) [...f.service.options].forEach(o=>{ if(o.text.startsWith(wanted)) o.selected = true; });
  f.addEventListener('submit', e=>{
    e.preventDefault();
    const msg = f.querySelector('.form-msg');
    if(!f.checkValidity()){ f.reportValidity(); return; }
    msg.textContent = `Thank you, ${f.name.value.split(' ')[0]}! The SV Groups sales team will get in touch with you shortly.`;
    msg.classList.add('show'); f.reset();
  });
});
$('yr').textContent = new Date().getFullYear();
