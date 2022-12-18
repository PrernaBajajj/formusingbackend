document.querySelector('#signup-btn').addEventListener('click', () => {
    document.querySelector('#signup').style.display = "block";
    document.querySelector('#login').style.display = "none";
})

document.querySelector('#login-btn').addEventListener('click', () => {
    document.querySelector('#signup').style.display = "none";
    document.querySelector('#login').style.display = "block";
})

document.querySelector('#signup-db').addEventListener('click', (e) => {
    e.preventDefault()
    const fname = document.querySelector('#fname').value
    const lname = document.querySelector('#lname').value
    const email = document.querySelector('#mail').value
    const password = document.querySelector('#pwd').value

    if(fname === '' || lname === '' || email === '' || password === ''){
        window.alert('Please enter all the details carefully!')
    }

    else{
        const user = {
            fname: fname,
            lname: lname,
            email: email,
            password: password
        }

        const xhr = new XMLHttpRequest()
        const url = `http://localhost:5000/youtube/signup`
        
        xhr.open('POST', url)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onreadystatechange = () => {
            if(xhr.status === 201 && xhr.readyState === 4){
                console.log(xhr.responseText)
                window.alert('Sign Up Successful! Please login to continue.')
            } 

            else if(xhr.status === 400 && xhr.readyState === 4){
                window.alert('User Already Exists. Please SignUp with differnet mail.')
            }
        }
        xhr.send(JSON.stringify(user))
    }
})

document.querySelector('#login-db').addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.querySelector('#e-mail').value
    const password = document.querySelector('#e-pwd').value

    if(email === '' || password === ''){
        window.alert('Please enter all the details carefully!')
    }

    else{
        const user = {
            email: email,
            password: password
        }

        const xhr = new XMLHttpRequest()
        const url = `http://localhost:5000/youtube/login`
        
        xhr.open('POST', url)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onreadystatechange = () => {
            if(xhr.status === 200 && xhr.readyState === 4){
                console.log(xhr.responseText)
                window.alert('Login Successfully!')
                window.location.replace('page.html')
            } 
            else if(xhr.status === 404 && xhr.readyState === 4){
                console.log(xhr.responseText)
                window.alert('User Authentication Failed! Try again with different email or password')
            }

            else if(xhr.status === 400 && xhr.readyState === 4){
                window.alert('User does not exists. Please SignUp.')
            }
        }

        xhr.send(JSON.stringify(user))
    }
})