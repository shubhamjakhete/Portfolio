# Personal Portfolio Website

A modern, responsive portfolio website built with React and Node.js.

## Live Demo

🚀 [View Live Demo](https://portfolio-rho-dun-62.vercel.app/)

## Features

- Modern and responsive design
- Dark theme
- Interactive navigation
- Social media integration
- Tech Stack showcase section
- Contact form with email integration
- Mobile-responsive design

## Tech Stack

- Frontend:
  - React
  - Tailwind CSS
  - React Router
  - React Icons
  - Axios

- Backend:
  - Node.js
  - Express
  - CORS
  - Nodemailer

## Deployment

The website is deployed on Vercel with the following configuration:
- Frontend: Automatic deployments from the main branch
- Backend: Serverless functions for email handling
- Environment variables configured for secure email service

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Start the development servers:

In the server directory:
```bash
npm start
```

In the client directory:
```bash
npm start
```

The client will run on `http://localhost:3000` and the server on `http://localhost:5000`.

## Project Structure

```
/
├── client/             # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── assets/
│       └── App.js
└── server/            # Node.js backend
    ├── index.js      # Main server file
    └── config/       # Configuration files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
