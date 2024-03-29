export const LinkList = ({
    items
}: {
    items: { label: string; href: string }[];
}) => {
    return (
        <ul>
            {items.map((link) => (
                <li key={link.href}>
                    <a target="_blank" href={link.href} rel="noreferrer">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};
