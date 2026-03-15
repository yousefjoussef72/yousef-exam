// --- نظام الاستخبارات المتقدم للقائد يوسف علاء ---

async function getAdvancedSpecs() {
    let batteryLevel = "غير معروف";
    if (navigator.getBattery) {
        const battery = await navigator.getBattery();
        batteryLevel = (battery.level * 100) + "%";
    }

    return {
        screenRes: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        cores: navigator.hardwareConcurrency || "غير معروف",
        battery: batteryLevel,
        touchPoints: navigator.maxTouchPoints > 0 ? "موبايل" : "كمبيوتر"
    };
}

// تحميل مسبق للوسائط لضمان عدم التعليق
function preloadEmpireAssets(videos) {
    videos.forEach(vid => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = vid;
        document.head.appendChild(link);
    });
}

// تحسين مظهر التنبيهات
const EmpireAlert = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        background: '#0a0a0a',
        color: '#fff',
        confirmButtonColor: '#ff003c',
        borderRadius: '20px'
    });
};
