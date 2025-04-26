document.getElementById('loginButton').addEventListener('click', function() {
    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('password').value;

    if (loginId && password) {
        // 特定のURLに遷移
        window.location.href = 'https://www.c-sqr.net/home';
    } else {
        alert('ログインIDとパスワードを入力してください。');
    }
});