const SkillsSection = () => {
    const skills = [
        'ReactJs',
        'PHP',
        'Python',
    ];

    return (
        <section id='skills' className='container mx-auto text-white bg-black h-screen p-4 space-y-4'>
            <h1 className='font-bold text-5xl'>
                Skills
            </h1>
            <ul className="list-disc marker:text-red-500">
                {
                    skills.map((list, key) => (
                        <li key={key} className="font-semibold">
                            {list}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default SkillsSection;