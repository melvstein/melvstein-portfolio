export default function Nav() {
    return (
        <nav className='flex items-center justify-between w-full bg-slate-500'>
    <a className='nav-menu' href="/">Home</a>
    <a className='nav-menu' href="/aboutme">About Me</a>
    <a className='nav-menu' href="/contactme">Contact Me</a>
</nav>
    );
}