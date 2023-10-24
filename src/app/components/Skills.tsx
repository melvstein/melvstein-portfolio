const Skills = () => {
    const skills = [
        'ReactJs',
        'PHP',
        'Python',
    ];

    return (
        <div className="p-4">
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
        </div>
    )
}

export default Skills;