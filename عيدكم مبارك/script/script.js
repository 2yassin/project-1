
// رسائل التهنئة من م. ياسين محمد سعيد البكور
const greetingMessages = [
    {
        text: "تقبل الله منا ومنكم صالح الأعمال، وجعل أيامكم كلها فرح وسعادة",
        sender: "م. ياسين محمد سعيد البكور"
    },
    {
        text: "كل عام وأنتم بخير، عيد فطر مبارك سعيد عليكم وعلى أهلكم",
        sender: "م. ياسين محمد سعيد البكور"
    },
    {
        text: "أسأل الله أن يعيده علينا وعليكم بالخير واليمن والبركات",
        sender: "م. ياسين محمد سعيد البكور"
    },
    {
        text: "عيدكم مبارك، وكل سنة وأنتم إلى الله أقرب، عساكم من عواده",
        sender: "م. ياسين محمد سعيد البكور"
    },
    {
        text: "جعل الله أيامكم كلها فرح وسرور، وتقبل الله طاعاتكم",
        sender: "م. ياسين محمد سعيد البكور"
    },
    {
        text: "مع أصدق التهاني وأطيب الأمنيات بحلول عيد الفطر المبارك",
        sender: "م. ياسين محمد سعيد البكور"
    },
    {
        text: "عيد فطر سعيد، أعاده الله علينا وعليكم بالخير والمسرات",
        sender: "م. ياسين محمد سعيد البكور"
    },
    {
        text: "كل عام وأنتم بخير وصحة وسعادة، عيد مبارك",
        sender: "م. ياسين محمد سعيد البكور"
    }
];

// إنشاء النجوم
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// إنشاء الفوانيس
function createLanterns() {
    const lanternsContainer = document.getElementById('lanterns');
    const positions = ['5%', '15%', '85%', '95%'];
    positions.forEach((left, index) => {
        const lantern = document.createElement('div');
        lantern.className = 'lantern';
        lantern.style.left = left;
        lantern.style.top = index % 2 === 0 ? '10%' : '70%';
        lantern.style.animationDelay = index * 0.5 + 's';
        lanternsContainer.appendChild(lantern);
    });
}

// إنشاء الهلال الطائر
function createFloatingCrescents() {
    const crescentsContainer = document.getElementById('crescents');
    for (let i = 0; i < 15; i++) {
        const crescent = document.createElement('div');
        crescent.className = 'floating-crescent';
        crescent.innerHTML = ['🌙', '⭐', '✨'][Math.floor(Math.random() * 3)];
        crescent.style.left = Math.random() * 100 + '%';
        crescent.style.top = Math.random() * 100 + '%';
        crescent.style.animationDelay = Math.random() * 5 + 's';
        crescent.style.animationDuration = 10 + Math.random() * 10 + 's';
        crescentsContainer.appendChild(crescent);
    }
}

// تغيير رسالة التهنئة
function changeGreeting() {
    const greetingElement = document.getElementById('greeting-text');
    const senderElement = document.getElementById('greeting-sender');

    const randomIndex = Math.floor(Math.random() * greetingMessages.length);

    // تأثير الأنميشن
    greetingElement.style.animation = 'slide-in 0.5s ease-out';
    senderElement.style.animation = 'sender-appear 0.5s ease-out';

    greetingElement.textContent = greetingMessages[randomIndex].text;
    senderElement.textContent = `- ${greetingMessages[randomIndex].sender}`;

    setTimeout(() => {
        greetingElement.style.animation = '';
        senderElement.style.animation = '';
    }, 500);

    createClickEffect(event);
}

// تحديث الساعة
function updateClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // تحديث التاريخ
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateStr = now.toLocaleDateString('ar-SA', options);
    document.getElementById('date').textContent = dateStr;
}

// إطلاق المفرقعات المحسنة
function launchEnhancedConfetti() {
    // مفرقعات أكثر وكثافة أعلى
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'enhanced-confetti';

            // ألوان وأشكال متنوعة
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff4500'];
            const shapes = ['●', '❤', '★', '♦', '♣', '♠', '▪', '▫'];

            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.fontSize = (15 + Math.random() * 25) + 'px';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.zIndex = '9998';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `confetti-fall ${3 + Math.random() * 4}s ease-in forwards`;
            confetti.style.animationDelay = Math.random() * 2 + 's';

            confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 7000);
        }, i * 30); // ظهور أسرع
    }

    // إضافة مفرقعات إيموجي
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const emojiConfetti = document.createElement('div');
            emojiConfetti.style.position = 'fixed';
            emojiConfetti.style.left = Math.random() * 100 + '%';
            emojiConfetti.style.top = '-10px';
            emojiConfetti.style.fontSize = (20 + Math.random() * 30) + 'px';
            emojiConfetti.style.zIndex = '9999';
            emojiConfetti.style.pointerEvents = 'none';
            emojiConfetti.style.animation = `confetti-fall ${2 + Math.random() * 3}s ease-in forwards`;
            emojiConfetti.innerHTML = ['🎊', '🎉', '✨', '⭐', '🌟', '🎆', '🎇', '🧨'][Math.floor(Math.random() * 8)];
            document.body.appendChild(emojiConfetti);

            setTimeout(() => emojiConfetti.remove(), 5000);
        }, i * 20);
    }

    createClickEffect(event);
}

// إضافة بالون
function addBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.innerHTML = '🎈';
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDuration = 4 + Math.random() * 4 + 's';
    balloon.style.fontSize = 30 + Math.random() * 30 + 'px';
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 8000);
}

// تأثير النقر
function createClickEffect(event) {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const effect = document.createElement('div');
            effect.className = 'click-effect';
            effect.innerHTML = ['✨', '⭐', '🌟'][Math.floor(Math.random() * 3)];
            effect.style.left = (event?.clientX || window.innerWidth / 2) + (Math.random() * 40 - 20) + 'px';
            effect.style.top = (event?.clientY || window.innerHeight / 2) + (Math.random() * 40 - 20) + 'px';
            document.body.appendChild(effect);

            setTimeout(() => effect.remove(), 1000);
        }, i * 100);
    }
}

// دوال الفيديو
function openEidVideo() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('eidVideoPlayer');

    modal.style.display = 'flex';

    // محاولة تشغيل الفيديو
    videoPlayer.play().catch(e => console.log("لم يتمكن من تشغيل الفيديو تلقائياً"));

    // إضافة تأثير النقر
    createClickEffect(event);
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('eidVideoPlayer');

    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    modal.style.display = 'none';
}

function closeVideoOnClickOutside(event) {
    if (event.target.className === 'video-modal') {
        closeVideo();
    }
}

// إضافة تأثيرات عند تحريك الماوس
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.02) {
        const spark = document.createElement('div');
        spark.style.position = 'fixed';
        spark.style.left = e.clientX + 'px';
        spark.style.top = e.clientY + 'px';
        spark.style.color = '#ffd700';
        spark.style.fontSize = '15px';
        spark.innerHTML = '✨';
        spark.style.pointerEvents = 'none';
        spark.style.animation = 'click-pop 1s forwards';
        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 1000);
    }
});

// تهيئة الصفحة
window.onload = () => {
    createStars();
    createLanterns();
    createFloatingCrescents();

    // تحديث الساعة كل ثانية
    setInterval(updateClock, 1000);
    updateClock(); // تحديث فوري عند التحميل

    // إضافة بالونات بشكل دوري
    setInterval(addBalloon, 3000);

    // تأثير عند تحميل الصفحة
    setTimeout(() => {
        launchEnhancedConfetti();
    }, 500);
};

// إضافة تأثير النقر على الصفحة
document.addEventListener('click', createClickEffect);