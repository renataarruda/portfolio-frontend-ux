  interface Props {
    title?: string;
    listData: string[];
  }

const List = ({ title, listData }: Props) => {

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {listData.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
