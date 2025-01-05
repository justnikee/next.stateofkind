export default function layout({children,}: Readonly<{children: React.ReactNode;}>){
  return (
    <>
    <main className="max-w-screen-xl m-auto">
    {children}
    </main>
    </>
  )
}