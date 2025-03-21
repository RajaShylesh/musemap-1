// Initialize Supabase
const SUPABASE_URL = 'https://ahhxdfrcuumgfwgnoyjz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoaHhkZnJjdXVtZ2Z3Z25veWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NDkyNzIsImV4cCI6MjA1ODEyNTI3Mn0.7eql24ro-5h0gv4pIYoDrL5DqjzS7JCYC_6x8k4PqT8';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Handle register form submission
document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Form submitted:', { name, email, password });

    // Sign up the user with Supabase Auth
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        console.error('Error registering:', error.message);
        alert('Error registering: ' + error.message);
    } else {
        console.log('User signed up:', user);

        // Insert user data into the users table
        const { data, error: insertError } = await supabase
            .from('users')
            .insert([
                { id: user.id, name: name, email: email, password: password }
            ]);

        if (insertError) {
            console.error('Error inserting user data:', insertError.message);
            alert('Error inserting user data: ' + insertError.message);
        } else {
            console.log('User data inserted:', data);
            alert('Registered successfully!');
            // Redirect or perform other actions after successful registration
        }
    }
});