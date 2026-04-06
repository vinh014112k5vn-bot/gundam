document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('login-form');

    if (!loginBtn || !loginModal || !closeBtn || !loginForm) return;

    // Open modal
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('show');
    });

    // Close modal via button
    closeBtn.addEventListener('click', () => {
        loginModal.classList.remove('show');
    });

    // Close modal via clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
        }
    });

    // Handle form submit visually
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulate a login process with an overlay/button state change
        const submitBtn = loginForm.querySelector('.login-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xử lý...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            if(email && password) {
                alert(`Đăng nhập thành công với tài khoản: ${email}!`);
                loginModal.classList.remove('show');
                loginForm.reset();
            } else {
                alert('Vui lòng nhập đầy đủ thông tin.');
            }
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1200);
    });
});
