import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Home } from 'lucide-react'
import { Link } from 'react-router'

export default function NotFound () {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-xl mx-auto px-10 md:px-0 py-10">
        <Card className="w-full max-w-sm text-center">
          <CardHeader>
            <CardTitle>404 - Page Not Found</CardTitle>
            <CardDescription>
              Oops! The page you're looking for doesn't exist.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/">
              <Button className="w-full">
                <Home />
                Go back home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}