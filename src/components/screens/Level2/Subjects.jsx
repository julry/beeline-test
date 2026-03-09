export const Subjects = ({onClick}) => (
    <svg width="100%" height="100%" viewBox="0 0 715 667" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin slice">
        <rect onClick={() => onClick('box')} x="38" y="353" width="118" height="106" fill="transparent"/>
        <rect onClick={() => onClick('wires')} y="532" width="247" height="98" fill="transparent"/>
        <rect onClick={() => onClick('building')} x="446" y="252" width="269" height="255" fill="transparent"/>
    </svg>
)