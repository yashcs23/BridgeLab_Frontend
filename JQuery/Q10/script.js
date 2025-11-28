$(document).ready(function() {
    // Existing emails (simulated database)
    const existingEmails = ['john@example.com', 'jane@example.com', 'admin@company.com'];

    // ===== Validation Functions =====
    
    function validateName() {
        const name = $('#name').val().trim();
        const $nameInput = $('#name');
        const $nameError = $('#nameError');

        if (name === '') {
            $nameInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
            $nameError.text('❌ Name cannot be empty').addClass('show');
            return false;
        } else if (name.length < 2) {
            $nameInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
            $nameError.text('❌ Name must be at least 2 characters').addClass('show');
            return false;
        } else {
            $nameInput.css('border-color', '#27ae60').css('background', '#d5f4e6');
            $nameError.removeClass('show');
            return true;
        }
    }

    function validateEmail() {
        const email = $('#email').val().trim();
        const $emailInput = $('#email');
        const $emailError = $('#emailError');
        const $emailStatus = $('#emailStatus');

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            $emailInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
            $emailError.text('❌ Email cannot be empty').addClass('show');
            $emailStatus.removeClass('checking available taken');
            return false;
        }

        if (!emailRegex.test(email)) {
            $emailInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
            $emailError.text('❌ Please enter a valid email format').addClass('show');
            $emailStatus.removeClass('checking available taken');
            return false;
        }

        // Check for uniqueness (simulated)
        $emailStatus.addClass('checking').text('🔍 Checking availability...');

        setTimeout(function() {
            if (existingEmails.includes(email)) {
                $emailInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
                $emailError.text('❌ This email is already registered').addClass('show');
                $emailStatus.removeClass('checking available').addClass('taken').text('⚠️ Email already in use');
                return false;
            } else {
                $emailInput.css('border-color', '#27ae60').css('background', '#d5f4e6');
                $emailError.removeClass('show');
                $emailStatus.removeClass('checking taken').addClass('available').text('✅ Email is available');
                return true;
            }
        }, 500);

        return true;
    }

    function validatePassword() {
        const password = $('#password').val();
        const $passwordInput = $('#password');
        const $passwordError = $('#passwordError');

        if (password === '') {
            $passwordInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
            $passwordError.text('❌ Password cannot be empty').addClass('show');
            return false;
        }

        // Check length
        const hasLength = password.length >= 8;
        $('#lengthCheck').toggleClass('valid', hasLength).toggleClass('invalid', !hasLength);
        $('#lengthCheck .validation-icon').text(hasLength ? '✓' : '✗');

        // Check uppercase
        const hasUppercase = /[A-Z]/.test(password);
        $('#uppercaseCheck').toggleClass('valid', hasUppercase).toggleClass('invalid', !hasUppercase);
        $('#uppercaseCheck .validation-icon').text(hasUppercase ? '✓' : '✗');

        // Check number
        const hasNumber = /[0-9]/.test(password);
        $('#numberCheck').toggleClass('valid', hasNumber).toggleClass('invalid', !hasNumber);
        $('#numberCheck .validation-icon').text(hasNumber ? '✓' : '✗');

        const isValid = hasLength && hasUppercase && hasNumber;

        if (isValid) {
            $passwordInput.css('border-color', '#27ae60').css('background', '#d5f4e6');
            $passwordError.removeClass('show');
            return true;
        } else {
            $passwordInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
            $passwordError.text('❌ Password must meet all requirements').addClass('show');
            return false;
        }
    }

    function validateConfirmPassword() {
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const $confirmInput = $('#confirmPassword');
        const $confirmError = $('#confirmPasswordError');

        if (confirmPassword === '') {
            $confirmInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
            $confirmError.text('❌ Please confirm your password').addClass('show');
            return false;
        }

        if (password !== confirmPassword) {
            $confirmInput.css('border-color', '#e74c3c').css('background', '#fadbd8');
            $confirmError.text('❌ Passwords do not match').addClass('show');
            return false;
        }

        $confirmInput.css('border-color', '#27ae60').css('background', '#d5f4e6');
        $confirmError.removeClass('show');
        return true;
    }

    // ===== Event Listeners =====

    // Name field validation
    $('#name').on('blur', validateName);
    $('#name').on('keyup', function() {
        if ($(this).val().trim() !== '') {
            validateName();
        }
    });

    // Email field validation
    $('#email').on('blur', validateEmail);
    $('#email').on('keyup', function() {
        if ($(this).val().trim() !== '') {
            validateEmail();
        }
    });

    // Password field validation
    $('#password').on('input', validatePassword);
    $('#password').on('blur', validatePassword);

    // Confirm password validation
    $('#confirmPassword').on('blur', validateConfirmPassword);
    $('#confirmPassword').on('keyup', function() {
        if ($(this).val() !== '') {
            validateConfirmPassword();
        }
    });

    // Form submission
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        const nameValid = validateName();
        const emailValid = validateEmail();
        const passwordValid = validatePassword();
        const confirmPasswordValid = validateConfirmPassword();

        // Small delay to check email uniqueness
        setTimeout(function() {
            // Re-check email for final validation
            const email = $('#email').val().trim();
            const emailIsUnique = !existingEmails.includes(email);

            if (nameValid && emailValid && emailIsUnique && passwordValid && confirmPasswordValid) {
                // Show success message
                $('#successMessage').addClass('show');

                // Highlight success with green borders
                $('#name, #email, #password, #confirmPassword').css('border-color', '#27ae60').css('background', '#d5f4e6');

                // Clear form after delay
                setTimeout(function() {
                    $('#registrationForm')[0].reset();
                    $('#successMessage').removeClass('show');
                    $('#name, #email, #password, #confirmPassword').css('border-color', '#e0e0e0').css('background', 'white');
                    $('#emailStatus').removeClass('checking available taken');
                    $('#passwordValidation .validation-item').removeClass('valid invalid');
                }, 2000);
            } else {
                alert('❌ Please fix all errors before submitting');
            }
        }, 600);
    });

    // Initial password validation display
    $('#passwordValidation .validation-item').addClass('invalid');
    $('#passwordValidation .validation-icon').text('✗');
});
