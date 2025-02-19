export const Header = () => {
  return (
    <header className="sticky top-0 w-full h-14 bg-white">
      <div className="w-full max-w-3xl h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <img src="/logo.svg" alt="logo" className="size-8" />
          <h1>Typography maker</h1>
        </div>
        <a href="">
          <img src="/github.svg" alt="github_logo" className="size-6" />
        </a>
      </div>
    </header>
  )
}
