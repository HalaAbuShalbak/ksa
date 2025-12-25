$(document).ready(function() {
    const mobileMenuButton = $('#mobile-menu-button');
    const closeMobileMenu = $('#close-mobile-menu');
    const mobileMenu = $('#mobile-menu');

    mobileMenuButton.on('click', function() {
        mobileMenu.removeClass('hidden');
    });

    closeMobileMenu.on('click', function() {
        mobileMenu.addClass('hidden');
    });

    // Close mobile menu when a navigation link is clicked
    mobileMenu.find('a').on('click', function() {
        mobileMenu.addClass('hidden');
    });

    // Populate Hero Section from content.js
    if (typeof content !== 'undefined' && content.hero) {
        $('#hero-title').text(content.hero.title);
        $('#hero-subtitle').text(content.hero.subtitle);

        // Populate CTA buttons
        const ctaContainer = $('#hero-ctas');
        content.hero.ctas.forEach(cta => {
            const buttonClass = cta.label === "ابدأ الآن" ? "btn-primary" : "btn-secondary";
            if (cta.label === "ابدأ الآن") {
                ctaContainer.append(`<a href="signup.html" class="btn ${buttonClass}">${cta.label}</a>`);
            } else {
                ctaContainer.append(`<button class="btn ${buttonClass}">${cta.label}</button>`);
            }
        });

        // Populate Stats
        const statsContainer = $('#hero-stats');
        content.hero.stats.forEach(stat => {
            statsContainer.append(`
                <div class="text-center">
                    <div class="font-cairo text-3xl font-bold text-primary">${stat.value}</div>
                    <div class="text-contrast-light text-sm">${stat.label}</div>
                </div>
            `);
        });
    }

    // Intersection Observer for fade-in-up animations
    const animateOnScrollElements = $('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animateOnScrollElements.each(function() {
        observer.observe(this);
    });

    // Populate Features Section from content.js
    if (typeof content !== 'undefined' && content.features) {
        const featuresGrid = $('#features-grid');
        content.features.forEach((feature, index) => {
            featuresGrid.append(`
                <div class="feature-card bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 animate-on-scroll delay-${index * 100}">
                    <img src="${feature.icon}" alt="${feature.title}" class="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 class="text-xl font-cairo font-bold text-contrast mb-2">${feature.title}</h3>
                    <p class="text-contrast-light">${feature.description}</p>
                </div>
            `);
        });
    }

    // Populate How It Works Section from content.js
    if (typeof content !== 'undefined' && content.howItWorks) {
        const howItWorksSteps = $('#how-it-works-steps');
        content.howItWorks.forEach((step, index) => {
            howItWorksSteps.append(`
                <div class="how-it-works-step relative flex flex-col items-center text-center animate-on-scroll delay-${index * 150}">
                    <div class="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <img src="${step.icon}" alt="${step.title}" class="w-10 h-10 text-white filter brightness-0 invert" />
                    </div>
                    <h3 class="text-xl font-cairo font-bold text-contrast mb-2">${step.title}</h3>
                    <p class="text-contrast-light">${step.description}</p>
                </div>
            `);
        });
    }

    // Populate Pricing Section from content.js
    if (typeof content !== 'undefined' && content.pricing) {
        const pricingPlans = $('#pricing-plans');
        content.pricing.forEach((plan, index) => {
            const highlightedClass = plan.highlighted ? 'border-primary scale-105 shadow-2xl' : 'border-border';
            const ctaButtonClass = plan.highlighted ? 'btn-primary' : 'btn-secondary';
            let featuresList = '';
            plan.features.forEach(feature => {
                featuresList += `<li class="flex items-center text-contrast-light mb-2"><svg class="w-5 h-5 text-secondary ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>${feature}</li>`;
            });

            pricingPlans.append(`
                <div class="pricing-card bg-card p-8 rounded-lg border-2 ${highlightedClass} animate-on-scroll delay-${index * 150} flex flex-col">
                    ${plan.highlighted ? '<div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-contrast text-sm font-bold px-4 py-1 rounded-full">الأكثر شعبية</div>' : ''}
                    <h3 class="text-2xl font-cairo font-bold text-contrast mb-2">${plan.plan}</h3>
                    <p class="text-contrast-light mb-4">${plan.period}</p>
                    <div class="text-4xl font-cairo font-extrabold text-primary mb-6">${plan.price}</div>
                    <ul class="text-right mb-8 flex-grow">
                        ${featuresList}
                    </ul>
                    <button class="plan-choose-btn btn ${ctaButtonClass} w-full mt-auto" data-plan="${plan.plan}" data-price="${plan.price}">${plan.cta}</button>
                </div>
            `);
        });
    }

    // Populate FAQ Section from content.js and add accordion functionality
    if (typeof content !== 'undefined' && content.faq) {
        const faqAccordion = $('#faq-accordion');
        content.faq.forEach((item, index) => {
            faqAccordion.append(`
                <div class="faq-item border-b border-border py-4 animate-on-scroll delay-${index * 100}">
                    <button class="faq-question flex justify-between items-center w-full text-right font-tajawal text-lg font-semibold text-contrast hover:text-primary transition-colors duration-200">
                        <span>${item.question}</span>
                        <svg class="w-5 h-5 text-primary transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="faq-answer mt-2 text-contrast-light hidden pr-6 transition-all duration-300 ease-in-out">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `);
        });

        // Accordion functionality
        $('.faq-question').on('click', function() {
            const answer = $(this).next('.faq-answer');
            const icon = $(this).find('svg');

            $('.faq-answer').not(answer).slideUp(300).addClass('hidden');
            $('.faq-question svg').not(icon).removeClass('rotate-180');

            answer.slideToggle(300, function() {
                if ($(this).is(':visible')) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            });
            icon.toggleClass('rotate-180');
        });
    }

    // Populate CTA Banner Section from content.js
    if (typeof content !== 'undefined' && content.ctaBanner) {
        $('#cta-banner-title').text(content.ctaBanner.title);
        $('#cta-banner-subtitle').text(content.ctaBanner.subtitle);
        const ctaButton = $('#cta-banner-button');
        ctaButton.text(content.ctaBanner.button.label);
        // Change button to link
        ctaButton.replaceWith(`<a href="signup.html" class="btn bg-white text-primary hover:bg-gray-100">${content.ctaBanner.button.label}</a>`);
    }
    
    // Plan selection button handlers - open signup modal
    $(document).on('click', '.plan-choose-btn', function() {
        const planName = $(this).data('plan');
        const planPrice = $(this).data('price');
        
        // Show selected plan info
        $('#selected-plan-info').removeClass('hidden');
        $('#selected-plan-name').text(planName);
        $('#selected-plan-price').text(`${planPrice} ر.س`);
        
        // Store plan info in form
        $('#signup-modal-form').data('selected-plan', planName);
        $('#signup-modal-form').data('selected-price', planPrice);
        
        // Open signup modal
        $('#signup-modal-overlay').removeClass('hidden');
    });
    
    // Close signup modal
    $('#close-signup-modal, #cancel-signup-modal').on('click', function() {
        $('#signup-modal-overlay').addClass('hidden');
        $('#signup-modal-form')[0].reset();
        $('#selected-plan-info').addClass('hidden');
    });
    
    // Close modal when clicking overlay
    $('#signup-modal-overlay').on('click', function(e) {
        if ($(e.target).is('#signup-modal-overlay')) {
            $(this).addClass('hidden');
            $('#signup-modal-form')[0].reset();
            $('#selected-plan-info').addClass('hidden');
        }
    });
    
    // Close modal on Escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && !$('#signup-modal-overlay').hasClass('hidden')) {
            $('#signup-modal-overlay').addClass('hidden');
            $('#signup-modal-form')[0].reset();
            $('#selected-plan-info').addClass('hidden');
        }
    });
    
    // Signup form submission
    $('#signup-modal-form').on('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            fullName: $('#modal-fullName').val(),
            serviceName: $('#modal-serviceName').val(),
            email: $('#modal-email').val(),
            mobileNumber: $('#modal-mobileNumber').val(),
            serviceType: $('#modal-serviceType').val(),
            selectedPlan: $(this).data('selected-plan'),
            selectedPrice: $(this).data('selected-price')
        };
        
        // TODO: Submit to API
        // For now, redirect to signup page with plan info
        const params = new URLSearchParams({
            plan: formData.selectedPlan || '',
            price: formData.selectedPrice || ''
        });
        
        window.location.href = `signup.html?${params.toString()}`;
    });

    // Populate Footer Section from content.js
    if (typeof content !== 'undefined' && content.footer) {
        $('#footer-logo').text(content.footer.logo);
        $('#footer-copyright').text(content.footer.copyright);

        const quickLinksContainer = $('#footer-quick-links');
        content.footer.quickLinks.forEach(link => {
            quickLinksContainer.append(`<li><a href="${link.href}" class="text-muted hover:text-primary transition-colors font-tajawal">${link.label}</a></li>`);
        });

        const socialIconsContainer = $('#footer-socials');
        content.footer.socials.forEach(social => {
            socialIconsContainer.append(`<a href="${social.href}" class="text-muted hover:text-primary transition-colors text-xl"><i class="${social.icon}"></i></a>`);
        });
    }

    // Populate Support Modal and handle interactions
    if (typeof content !== 'undefined' && content.supportModal) {
        $('#support-modal-title').text(content.supportModal.title);
        $('#support-modal-subtitle').text(content.supportModal.subtitle);
        $('#support-modal-illustration').attr('src', content.supportModal.illustration);
        $('#confirmation-text').text(content.supportModal.confirmationMessage);

        const formFieldsContainer = $('#support-form');
        content.supportModal.formFields.forEach(field => {
            if (field.type === 'select') {
                let optionsHtml = '';
                field.options.forEach(option => {
                    optionsHtml += `<option value="${option}">${option}</option>`;
                });
                formFieldsContainer.prepend(`
                    <div>
                        <label for="${field.id}" class="block text-sm font-medium text-contrast mb-1">${field.label}</label>
                        <select id="${field.id}" name="${field.id}" class="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                            <option value="">${field.placeholder}</option>
                            ${optionsHtml}
                        </select>
                    </div>
                `);
            } else if (field.type === 'textarea') {
                formFieldsContainer.prepend(`
                    <div>
                        <label for="${field.id}" class="block text-sm font-medium text-contrast mb-1">${field.label}</label>
                        <textarea id="${field.id}" name="${field.id}" rows="4" class="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="${field.placeholder}"></textarea>
                    </div>
                `);
            } else {
                formFieldsContainer.prepend(`
                    <div>
                        <label for="${field.id}" class="block text-sm font-medium text-contrast mb-1">${field.label}</label>
                        <input type="${field.type}" id="${field.id}" name="${field.id}" class="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="${field.placeholder}">
                    </div>
                `);
            }
        });

        const supportSocialLinksContainer = $('#support-social-links');
        content.supportModal.socialLinks.forEach(social => {
            supportSocialLinksContainer.append(`<a href="${social.href}" class="text-muted hover:text-primary transition-colors text-2xl mx-2"><i class="${social.icon}"></i></a>`);
        });

        // Modal open/close functionality
        $('#open-support-modal').on('click', function() {
            $('#support-modal').removeClass('hidden');
        });

        $('#close-support-modal').on('click', function() {
            $('#support-modal').addClass('hidden');
        });

        // Close modal when clicking outside
        $('#support-modal').on('click', function(e) {
            if ($(e.target).is(this)) {
                $(this).addClass('hidden');
            }
        });

        // Form submission (placeholder)
        $('#support-form').on('submit', function(e) {
            e.preventDefault();
            // Simulate AJAX submission
            console.log("Form submitted!");
            $('#support-form').addClass('hidden');
            $('#confirmation-message').removeClass('hidden');
            // You would typically send data to an API here
            // setTimeout(() => { // Optionally hide confirmation after a few seconds
            //     $('#confirmation-message').addClass('hidden');
            //     $('#support-form').removeClass('hidden').get(0).reset();
            //     $('#support-modal').addClass('hidden');
            // }, 5000);
        });
    }
});