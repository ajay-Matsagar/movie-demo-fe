export const regexPatterns = {
  mobileNumber: /^[0-9]{10}$/,
  password: {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    specialChar: /[!@#$%^&*(),.?":{}|<>]/,
  },
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  postalCode: /^\d{6}$/,
  passCode: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};
