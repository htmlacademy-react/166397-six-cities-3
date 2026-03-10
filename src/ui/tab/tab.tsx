type TabProp = {
  name: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf' ;
  className?: string;
}

function Tab({name, className}: TabProp): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${className || ''}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

export default Tab;
