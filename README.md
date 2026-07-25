# PropBoost

A modern property listing platform where users can advertise homes and storage facilities.

## Features

- Two subscription plans: Private (£25/year) and Business (£350/year)
- Stripe payments (Card + PayPal)
- Unlimited vs limited listings based on plan
- Photo uploads
- Social media sharing tools
- Secure authentication with Supabase
- Anti-bot protection (Cloudflare Turnstile)
- Row Level Security (RLS)

## Tech Stack

- Next.js 15 (App Router)
- Supabase (Auth + Database + Edge Functions)
- Stripe
- Tailwind CSS
- TypeScript

## Local Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/propboost.git
cd propboost

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local