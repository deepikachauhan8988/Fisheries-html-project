document.addEventListener('DOMContentLoaded', function() {
    const loginTypeRadios = document.querySelectorAll('input[name="loginType"]');
    const loginTitle = document.getElementById('loginTitle');
    const userSelect = document.querySelector('select[name="user"]');
    
    const loginOptions = {
        'Secretary Login': { icon: 'fa-lock', placeholder: 'Choose Secretary' },
        'Director Login': { icon: 'fa-user-tie', placeholder: 'Choose Director' },
        'Deputy Director Login': { icon: 'fa-user-shield', placeholder: 'Choose Deputy Director' },
        'AD Login': { icon: 'fa-user-cog', placeholder: 'Choose AD Officer' },
        'Inspector Login': { icon: 'fa-magnifying-glass', placeholder: 'Choose Inspector' },
        'Farmer Login': { icon: 'fa-fish', placeholder: 'Choose Farmer' },
        'Finance Login': { icon: 'fa-indian-rupee-sign', placeholder: 'Choose Finance Officer' }
    };
    
    loginTypeRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            const selectedType = this.value;
            if (loginOptions[selectedType]) {
                const option = loginOptions[selectedType];
                loginTitle.innerHTML = '<i class="fas ' + option.icon + '"></i> ' + selectedType;
                userSelect.innerHTML = '<option>' + option.placeholder + '</option>';
            }
        });
    });
});