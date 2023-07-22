import Star from "./Star"

type Props = {
  count: number
}

export const Stars = ({count=0}: Props) => {
  if (count > 0 && count <= 5) {
    const items = new Array(count)
    for (let i = 0; i < items.length; i++) {
      items[i] = <li key={i}><Star /></li>
    }
    return (
      <ul className="card-body-stars u-clearfix">
        {items}
      </ul>
    )
  } 
}

export default Stars