// Scripts para a Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Rolagem suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header fixo com mudança de estilo ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Validação do formulário
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valid = true;
            
            // Validação básica
            const requiredFields = contactForm.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Validação de email
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    valid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (valid) {
                // Aqui você integraria com o HubSpot ou outro serviço
                // Para fins de demonstração, mostraremos uma mensagem de sucesso
                const formData = new FormData(contactForm);
                const data = {};
                
                for (let [key, value] of formData.entries()) {
                    data[key] = value;
                }
                
                // Lógica para enviar os dados para o HubSpot (a ser implementada)
                // sendToHubspot(data);
                
                // Mensagem de sucesso temporária
                alert('Obrigado pelo contato! Retornaremos em breve.');
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            }
        });
    }
    
    // Adicionar classe de erro quando o campo perde o foco
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });
        
        // Remover classe de erro quando começa a digitar
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
    
    // Função para integração com HubSpot (a ser implementada)
    function sendToHubspot(data) {
        // Substituir com a integração real com o HubSpot
        console.log('Dados a serem enviados para o HubSpot:', data);
        
        // Exemplo de como seria a implementação:
        /*
        const portalId = 'YOUR_PORTAL_ID';
        const formId = 'YOUR_FORM_ID';
        const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
        
        const payload = {
            fields: Object.keys(data).map(key => ({
                name: key,
                value: data[key]
            })),
            context: {
                pageUri: window.location.href,
                pageName: document.title
            }
        };
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    }

    // Gallery Load More Functionality
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreImages);
    }
});

function loadMoreImages() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const loadMoreBtn = document.getElementById('load-more');
    
    // Images 7-12 (next batch)
    const nextImages = [
        { src: 'optimized_photos/auditoria-china-fabricas-7.png', alt: 'Equipamentos de fábrica na China' },
        { src: 'optimized_photos/auditoria-china-fabricas-8.png', alt: 'Controle de processos em fábrica chinesa' },
        { src: 'optimized_photos/auditoria-china-fabricas-9.png', alt: 'Testes de qualidade na China' },
        { src: 'optimized_photos/auditoria-china-fabricas-10.png', alt: 'Auditoria em linha de produção' },
        { src: 'optimized_photos/auditoria-china-fabricas-11.png', alt: 'Verificação de materiais na China' },
        { src: 'optimized_photos/auditoria-china-fabricas-12.png', alt: 'Inspeção de componentes' }
    ];
    
    // If button was clicked once, show next batch. If clicked twice, show final batch
    if (loadMoreBtn.getAttribute('data-batch') === 'final') {
        // Hide button after showing all images
        loadMoreBtn.style.display = 'none';
    } else if (loadMoreBtn.getAttribute('data-batch') === 'second') {
        // Add final batch (images 13-18)
        const finalImages = [
            { src: 'optimized_photos/auditoria-china-fabricas-13.png', alt: 'Checagem de produtos finais' },
            { src: 'optimized_photos/auditoria-china-fabricas-14.png', alt: 'Auditoria de embalagens' },
            { src: 'optimized_photos/auditoria-china-fabricas-15.png', alt: 'Controle de qualidade final' },
            { src: 'optimized_photos/auditoria-china-fabricas-16.png', alt: 'Verificação de documentação' },
            { src: 'optimized_photos/auditoria-china-fabricas-17.png', alt: 'Testes de resistência' },
            { src: 'optimized_photos/auditoria-china-fabricas-18.png', alt: 'Inspeção de matéria-prima' }
        ];
        
        addImagesToGallery(finalImages, galleryGrid);
        loadMoreBtn.setAttribute('data-batch', 'final');
        loadMoreBtn.textContent = 'Ver Menos';
    } else {
        // First click, add second batch
        addImagesToGallery(nextImages, galleryGrid);
        loadMoreBtn.setAttribute('data-batch', 'second');
        loadMoreBtn.textContent = 'Carregar Mais Fotos';
    }
}

function addImagesToGallery(images, container) {
    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';
        
        galleryItem.appendChild(img);
        container.appendChild(galleryItem);
    });
}