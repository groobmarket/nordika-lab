/**
 * NÓRDIKA LAB — SCRIPTS COMERCIALES Y EXPERIENCIA INTERACTIVA
 * "Atrévete a probar el frío"
 * Desarrollado con JavaScript moderno (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. CONFIGURACIÓN Y MODELO DE PRODUCTOS
  // =========================================================================
  const WHATSAPP_PHONE = '573004643896';
  const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}?text=`;

  const FLAVORS_DATA = {
    'rubi-boreal': {
      id: 'rubi-boreal',
      code: 'EXP-01',
      name: 'RUBÍ BOREAL',
      base: 'FRUTOS ROJOS',
      color: '#FF1A4B',
      glow: 'rgba(255, 26, 75, 0.5)',
      description: 'Una explosión de frutos rojos que despierta tus sentidos.',
      category: 'frutales',
      image: 'assets/images/flavor-rubi-boreal.jpg',
      cupImage: 'assets/images/cup-rubi-boreal.jpg',
      metrics: {
        frescura: 95,
        acidez: 85,
        intensidad: 90,
        dulzura: 70
      },
      sensoryNotes: 'Fusión criogénica de fresas silvestres, frambuesas maduras y moras sobre hielo cristalino.'
    },
    'solsticio-dorado': {
      id: 'solsticio-dorado',
      code: 'EXP-02',
      name: 'SOLSTICIO DORADO',
      base: 'MANGO',
      color: '#FFB800',
      glow: 'rgba(255, 184, 0, 0.5)',
      description: 'El sabor tropical del mango en una experiencia helada.',
      category: 'tropicales',
      image: 'assets/images/flavor-solsticio-dorado.jpg',
      cupImage: 'assets/images/cup-solsticio-dorado.jpg',
      metrics: {
        frescura: 90,
        acidez: 40,
        intensidad: 85,
        dulzura: 92
      },
      sensoryNotes: 'Dulzura pura de mango de sol congelado a -4°C con textura sedosa de micro-nieve.'
    },
    'glaciar-citrico': {
      id: 'glaciar-citrico',
      code: 'EXP-03',
      name: 'GLACIAR CÍTRICO',
      base: 'LIMÓN',
      color: '#00E676',
      glow: 'rgba(0, 230, 118, 0.5)',
      description: 'Una descarga refrescante con personalidad cítrica.',
      category: 'citricos',
      image: 'assets/images/flavor-glaciar-citrico.jpg',
      cupImage: 'assets/images/cup-glaciar-citrico.jpg',
      metrics: {
        frescura: 100,
        acidez: 95,
        intensidad: 92,
        dulzura: 50
      },
      sensoryNotes: 'Zumo de lima y limón natural prensado en frío con choque térmico de escarcha pura.'
    },
    'aurora-electrica': {
      id: 'aurora-electrica',
      code: 'EXP-04',
      name: 'AURORA ELÉCTRICA',
      base: 'BLUE RASPBERRY',
      color: '#00D2FF',
      glow: 'rgba(0, 210, 255, 0.5)',
      description: 'Una experiencia vibrante, dulce y electrizante.',
      category: 'frutales',
      image: 'assets/images/flavor-aurora-electrica.jpg',
      cupImage: 'assets/images/cup-aurora-electrica.jpg',
      metrics: {
        frescura: 96,
        acidez: 65,
        intensidad: 96,
        dulzura: 85
      },
      sensoryNotes: 'Frambuesa azul glacial con matices electrizantes que tiñen tus sentidos de neón ártico.'
    },
    'nube-artica': {
      id: 'nube-artica',
      code: 'EXP-05',
      name: 'NUBE ÁRTICA',
      base: 'COCO',
      color: '#E2F8FF',
      glow: 'rgba(226, 248, 255, 0.5)',
      description: 'Suavidad tropical en una nube de frescura.',
      category: 'tropicales',
      image: 'assets/images/flavor-nube-artica.jpg',
      cupImage: 'assets/images/cup-nube-artica.jpg',
      metrics: {
        frescura: 90,
        acidez: 15,
        intensidad: 80,
        dulzura: 82
      },
      sensoryNotes: 'Crema ligera de pulpa de coco virgen batida hasta alcanzar la textura de una nevada polar.'
    },
    'vortice-violeta': {
      id: 'vortice-violeta',
      code: 'EXP-06',
      name: 'VÓRTICE VIOLETA',
      base: 'UVA',
      color: '#B83BF5',
      glow: 'rgba(184, 59, 245, 0.5)',
      description: 'Un torbellino de sabor dulce, intenso y refrescante.',
      category: 'frutales',
      image: 'assets/images/flavor-vortice-violeta.jpg',
      cupImage: 'assets/images/cup-vortice-violeta.jpg',
      metrics: {
        frescura: 92,
        acidez: 55,
        intensidad: 94,
        dulzura: 88
      },
      sensoryNotes: 'Concentrado profundo de uvas tintas seleccionadas con estallido helado en cada sorbo.'
    }
  };

  /**
   * Genera el link de WhatsApp oficial con mensaje pre-estructurado
   */
  function getWhatsAppUrl(commercialName, baseFlavor) {
    if (commercialName && baseFlavor) {
      const msg = `Hola, NÓRDIKA LAB. Quiero pedir un ${commercialName} de ${baseFlavor.toLowerCase()}. ¿Me pueden dar información?`;
      return `${WHATSAPP_BASE_URL}${encodeURIComponent(msg)}`;
    }
    const generalMsg = `Hola, NÓRDIKA LAB. Quiero probar el frío y ordenar un granizado artesanal. ¿Qué sabores tienen disponibles hoy?`;
    return `${WHATSAPP_BASE_URL}${encodeURIComponent(generalMsg)}`;
  }

  // =========================================================================
  // 2. CANVAS DE PARTÍCULAS CRIOGÉNICAS Y CRISTALES DE HIELO
  // =========================================================================
  const canvas = document.getElementById('ice-particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const PARTICLE_COUNT = Math.min(65, Math.floor(window.innerWidth / 20));
    const particles = [];

    class IceParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -20;
        this.size = Math.random() * 2.8 + 0.8;
        this.speedY = Math.random() * 0.9 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.rotation = Math.random() * Math.PI * 2;
        this.type = Math.random() > 0.6 ? 'crystal' : 'flake';
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.005) * 0.3;
        this.rotation += this.rotSpeed;

        if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(167, 232, 255, ${this.opacity})`;
        ctx.shadowColor = 'rgba(0, 229, 255, 0.4)';
        ctx.shadowBlur = this.size * 2;

        if (this.type === 'crystal') {
          // Dibuja un pequeño rombo/cristal hexagonal de hielo
          ctx.beginPath();
          ctx.moveTo(0, -this.size * 1.8);
          ctx.lineTo(this.size, 0);
          ctx.lineTo(0, this.size * 1.8);
          ctx.lineTo(-this.size, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          // Copo circular suave
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new IceParticle());
    }

    let isCanvasActive = true;
    document.addEventListener('visibilitychange', () => {
      isCanvasActive = !document.hidden;
    });

    function renderParticles() {
      if (isCanvasActive) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
      }
      requestAnimationFrame(renderParticles);
    }

    renderParticles();
  }

  // =========================================================================
  // 3. HEADER SCROLL & NAVEGACIÓN MÓVIL
  // =========================================================================
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });

  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al hacer click en links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =========================================================================
  // 4. FILTRADO DE SABORES INTERACTIVO
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const flavorCards = document.querySelectorAll('.flavor-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      flavorCards.forEach(card => {
        const flavorId = card.dataset.flavor;
        const flavorCategory = FLAVORS_DATA[flavorId]?.category;

        if (filterValue === 'all' || flavorCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // =========================================================================
  // 5. LABORATORIO SENSORIAL INTERACTIVO (SECCIÓN EXPERIENCIA VISUAL)
  // =========================================================================
  const expTabs = document.querySelectorAll('.exp-tab-btn');
  const cupImg = document.getElementById('stage-cup-img');
  const stageDisc = document.getElementById('stage-glow-disc');
  const expName = document.getElementById('stage-flavor-name');
  const expBase = document.getElementById('stage-flavor-base');
  const expQuote = document.getElementById('stage-flavor-quote');
  const expNotes = document.getElementById('stage-sensory-notes');
  const expCtaBtn = document.getElementById('stage-order-btn');

  // Barras de métricas
  const meterFrescura = document.getElementById('meter-frescura');
  const meterAcidez = document.getElementById('meter-acidez');
  const meterIntensidad = document.getElementById('meter-intensidad');
  const meterDulzura = document.getElementById('meter-dulzura');

  const valFrescura = document.getElementById('val-frescura');
  const valAcidez = document.getElementById('val-acidez');
  const valIntensidad = document.getElementById('val-intensidad');
  const valDulzura = document.getElementById('val-dulzura');

  function updateSensoryStage(flavorKey) {
    const data = FLAVORS_DATA[flavorKey];
    if (!data) return;

    // Actualizar imagen con fade
    if (cupImg) {
      cupImg.style.opacity = '0.3';
      setTimeout(() => {
        cupImg.src = data.cupImage;
        cupImg.alt = `Granizado ${data.name} - ${data.base}`;
        cupImg.style.opacity = '1';
      }, 150);
    }

    // Glow halo
    if (stageDisc) {
      stageDisc.style.background = `radial-gradient(circle, ${data.glow} 0%, transparent 70%)`;
    }

    // Textos
    if (expName) expName.textContent = data.name;
    if (expBase) expBase.textContent = `SABOR OFICIAL: ${data.base}`;
    if (expQuote) expQuote.textContent = `"${data.description}"`;
    if (expNotes) expNotes.textContent = data.sensoryNotes;

    // Métricas animadas
    if (meterFrescura && valFrescura) {
      meterFrescura.style.width = `${data.metrics.frescura}%`;
      meterFrescura.style.setProperty('--meter-color', data.color);
      valFrescura.textContent = `${data.metrics.frescura}%`;
    }
    if (meterAcidez && valAcidez) {
      meterAcidez.style.width = `${data.metrics.acidez}%`;
      meterAcidez.style.setProperty('--meter-color', data.color);
      valAcidez.textContent = `${data.metrics.acidez}%`;
    }
    if (meterIntensidad && valIntensidad) {
      meterIntensidad.style.width = `${data.metrics.intensidad}%`;
      meterIntensidad.style.setProperty('--meter-color', data.color);
      valIntensidad.textContent = `${data.metrics.intensidad}%`;
    }
    if (meterDulzura && valDulzura) {
      meterDulzura.style.width = `${data.metrics.dulzura}%`;
      meterDulzura.style.setProperty('--meter-color', data.color);
      valDulzura.textContent = `${data.metrics.dulzura}%`;
    }

    // Botón de WhatsApp
    if (expCtaBtn) {
      expCtaBtn.href = getWhatsAppUrl(data.name, data.base);
      expCtaBtn.innerHTML = `PEDIR ${data.name} POR WHATSAPP`;
    }
  }

  expTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      expTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetFlavor = tab.dataset.target;
      updateSensoryStage(targetFlavor);
    });
  });

  // =========================================================================
  // 6. MODAL DE VISTA RÁPIDA DE SABOR
  // =========================================================================
  const modalOverlay = document.getElementById('flavor-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCupImg = document.getElementById('modal-cup-img');
  const modalTitle = document.getElementById('modal-flavor-title');
  const modalBase = document.getElementById('modal-flavor-base');
  const modalDesc = document.getElementById('modal-flavor-desc');
  const modalNotes = document.getElementById('modal-flavor-notes');
  const modalOrderBtn = document.getElementById('modal-order-btn');

  function openFlavorModal(flavorId) {
    const data = FLAVORS_DATA[flavorId];
    if (!data || !modalOverlay) return;

    if (modalCupImg) modalCupImg.src = data.cupImage;
    if (modalTitle) modalTitle.textContent = data.name;
    if (modalBase) modalBase.textContent = `SABOR: ${data.base}`;
    if (modalDesc) modalDesc.textContent = data.description;
    if (modalNotes) modalNotes.textContent = data.sensoryNotes;
    
    if (modalOrderBtn) {
      modalOrderBtn.href = getWhatsAppUrl(data.name, data.base);
      modalOrderBtn.textContent = `PEDIR ${data.name} POR WHATSAPP`;
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeFlavorModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-quick-preview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const flavorId = btn.closest('.flavor-card')?.dataset.flavor;
      if (flavorId) openFlavorModal(flavorId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeFlavorModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeFlavorModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFlavorModal();
  });

  // =========================================================================
  // 7. INTERSECTION OBSERVER PARA REVELADO SUAVE
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // =========================================================================
  // 8. LOG DE CONVERSIÓN & ASIGNACIÓN AUTOMÁTICA DE WHATSAPP
  // =========================================================================
  console.log('❄️ NÓRDIKA LAB Engine inicializado.');
  console.log('📞 Canal oficial de pedidos WhatsApp: +57 300 464 3896');
});
