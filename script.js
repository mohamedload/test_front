// دالة للبحث الوهمي
function searchProperties() {
    alert('جاري البحث عن الوحدات السكنية المطلوبة...');
}

// دالة لإرسال نموذج التواصل
function submitForm(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    alert('تم إرسال طلبك بنجاح! سيتواصل معك أحد مندوبينا قريباً.');
    event.target.reset(); // تفريغ الحقول بعد الإرسال
}

// تفعيل التمرير السلس للروابط في شريط التنقل
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});