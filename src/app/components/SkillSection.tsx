const SkillSection = () => {
    const skills = [
        'ReactJs',
        'PHP',
        'Python',
    ];

    return (
        <section id='skills' className='relative bg-blue-200 text-black space-y-4 h-screen p-4'>
            <h1 className='text-black font-bold text-5xl'>
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

export default SkillSection;