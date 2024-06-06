function showFeature(feature) {
    document.getElementById('greetingForm').style.display = 'none';
    document.getElementById('whatsappForm').style.display = 'none';
    document.getElementById('greetingOutput').style.display = 'none';
    document.getElementById('whatsappOutput').style.display = 'none';

    document.getElementById('greetingFeatureBtn').classList.remove('active');
    document.getElementById('whatsappFeatureBtn').classList.remove('active');

    if (feature === 'greeting') {
        document.getElementById('greetingForm').style.display = 'flex';
        document.getElementById('greetingOutput').style.display = 'block';
        document.getElementById('greetingFeatureBtn').classList.add('active');
    } else if (feature === 'whatsapp') {
        document.getElementById('whatsappForm').style.display = 'flex';
        document.getElementById('whatsappOutput').style.display = 'block';
        document.getElementById('whatsappFeatureBtn').classList.add('active');
    }
}

function generateGreeting() {
    let greetingBeforeName = document.getElementById('greetingBeforeName').value;
    let names = document.getElementById('names').value;
    let customText = document.getElementById('customText').value;

    let namesArray = names.split('\n');
    let greetings = [];

    namesArray.forEach(function(name) {
        let firstName = name.split(' ')[0];
        let greeting = `${greetingBeforeName} ${firstName}, ${customText}`;
        greetings.push(greeting);
    });

    let result = greetings.join('\n\n');
    document.getElementById('greetings').innerText = result;
}

function generateNameAndWhatsappLinks(names, whatsappLinks) {
    let namesArray = names.split('\n');
    let whatsappArray = whatsappLinks.split('\n');

    if (namesArray.length !== whatsappArray.length) {
        throw new Error("Jumlah nama dan link WhatsApp tidak sama.");
    }

    let combinedData = [];

    for (let i = 0; i < namesArray.length; i++) {
        let combinedString = `${namesArray[i]} ${whatsappArray[i]}`;
        combinedData.push(combinedString);
    }

    return combinedData.join('\n');
}

function generateWhatsAppLinks() {
    let names = document.getElementById('namesForLinks').value;
    let whatsappLinks = document.getElementById('whatsappLinks').value;

    try {
        let result = generateNameAndWhatsappLinks(names, whatsappLinks);
        document.getElementById('whatsappCombined').innerText = result;
    } catch (error) {
        alert(error.message);
    }
}

function resetForm(feature) {
    if (feature === 'greeting') {
        document.getElementById('greetingBeforeName').value = 'Hai hai';
        document.getElementById('names').value = '';
        document.getElementById('customText').value = 'Welcome to our community.';
        document.getElementById('greetings').innerText = '';
    } else if (feature === 'whatsapp') {
        document.getElementById('namesForLinks').value = '';
        document.getElementById('whatsappLinks').value = '';
        document.getElementById('whatsappCombined').innerText = '';
    }
}

// Show the greeting feature by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showFeature('greeting');
});
