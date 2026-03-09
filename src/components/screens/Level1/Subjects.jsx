export const Subjects = ({onClick}) => (
    <svg width="100%" height="100%" viewBox="0 0 942 667" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin slice">
        <rect onClick={() => onClick('map')} y="63" width="342" height="236" fill="transparent"/>
        <rect onClick={() => onClick('man')} x="325" y="274" width="204" height="393" fill="transparent"/>
        <rect onClick={() => onClick('desk')} x="610" y="161" width="332" height="446" fill="transparent"/>
    </svg>
)