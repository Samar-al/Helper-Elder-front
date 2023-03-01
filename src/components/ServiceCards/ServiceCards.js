import './styles.scss';
import { useSelector } from 'react-redux';
import Card from './Card';

export default function ServiceCards() {
  const { serviceList } = useSelector((state) => state.app);

  return (
    <div className="servicecards">
      {serviceList.map((service) => (
        <Card
          key={service.name}
          {...service}
        />
      ))}
    </div>
  );
}
