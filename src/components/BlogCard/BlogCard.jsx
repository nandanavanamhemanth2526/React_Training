const BlogCard = (props) => {
    const {Title} = props;
    const {image} = props;
    const {Description} = props;
    return (
        <div>
            <div style={{border : "4px solid black", marginBottom : "20px" , height : "200px", width: "1300px"}}>
                <img src={image} style={{height : "200px", width : "250px",marginLeft : "20px"}}/>
                <h2 style={{marginTop : "-200px", marginLeft : "330px"}}>{Title}</h2>
                <p style={{marginLeft : "330px"}}>{Description}</p>
                <b>{props.author?.name}</b>
            </div>
        </div>
    )
}
export default BlogCard;
