# Festival Crafter || Festival Event Management Site

# Site-Link: https://festival-event-managemen-2c60d.web.app/

This is a Festival (A type of Community and Cultural Events) Event Management service provider website, made using React JS, CSS3 (Tailwind and DaisyUI) and javascript

### Website pages:

- Home page with Banner(Automatic Slider), all the services we provide, upcoming events that will be arranged and planned by us, Customers reviews who have previously taken our services and footer section
- Gallery page with some photos of our previously arranged events
- Contact page containing the informations about how to reach us for bookings
- About us page with description of our work and introduction of the team members
- Login and Register pages to authenticate users
- Error page to handle page not found error

## Features:

- When user clicks "See Details" button of every services in the Home page, user is redirected to login page as details page is a private route. After user is logged in, user can visit individual services details page to know details about our services for each event type and our price rates
- When user clicks "Gallery" on Navbar, user is redirected to login page as gallery page is a private route. After user is logged in, user is redirected to Gallery to see our past events highlights
- When user clicks "Contact" on Navbar, user is redirected to login page as Contact page is a private route. After user is logged in, user is redirected to Contact to fill form to contact us or know our contact info and Details
- User can toggle between sign in and register pages
- While logging in, if credentials are not valid, error toast is shown and on valid credetials, success toast is shown
- While registering, if invalid email or password is entered, error toast is given. Password requirs minimum 6 characters and at least one capital letter and one special characters
- After user is successfully signed in or registered, users photo and username is shown in navbar and logout button appears
- When logout is clicked, user loggs out successfully and photo and username gets hidden and login/register button re-appears
- When a private route is reloaded, it keeps user in that page and doesn't navigate again to login page until user logs out
- When invalid url is types, user navigates to customized error page
- Website is made responsive for Tab and mobile devices

## Required:
- Tech Stack: React, Vite, CSS3 (Tailwind and DaisyUI)
- Programming Language: JavaScript
- Code Editor: Visual Studio Code (VSCode)
- Terminal: Git Bash
