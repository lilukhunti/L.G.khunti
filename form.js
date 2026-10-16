// આખી ફાઇનલ form.js ફાઇલ

document.addEventListener("DOMContentLoaded", function () {
    
    // ૧. નામનું ખાનું (Full Name) - કોઈ પણ આંકડા (0-9) ટાઈપ નહીં થાય
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        nameInput.addEventListener('input', function () {
            // આ કોડ આંકડા પડતા જ તરત જ તેને ડીલીટ કરી નાખશે
            this.value = this.value.replace(/[0-9]/g, '');
        });
    }

    // ૨. ફોન નંબરનું ખાનું (Phone) - અક્ષરો બંધ અને બરાબર ૧૦ જ આંકડા લખાશે
    const phoneInput = document.getElementById('phoneInput');
    if (phoneInput) {
        phoneInput.addEventListener('input', function () {
            // આંકડા સિવાયનું બધું (અક્ષરો/ચિહ્નો) દૂર કરો
            this.value = this.value.replace(/[^0-9]/g, '');
            // જો ૧૦ આંકડાથી વધુ ટાઈપ થાય તો કાપી નાખો
            if (this.value.length > 10) {   
                this.value = this.value.slice(0, 10);
            }
        });
    }

    // ૩. ઉંમરનું ખાનું (Age) - અક્ષરો બંધ અને વધુમાં વધુ ૨ જ આંકડા લખાશે
    const ageInput = document.getElementById('ageInput');
    if (ageInput) {
        ageInput.addEventListener('input', function () {
            // આંકડા સિવાયનું બધું (અક્ષરો/ચિહ્નો) દૂર કરો
            this.value = this.value.replace(/[^0-9]/g, '');
            // જો ૨ આંકડાથી વધુ ટાઈપ થાય તો કાપી નાખો
            if (this.value.length > 2) {
                this.value = this.value.slice(0, 2);
            }
        });
    }

});