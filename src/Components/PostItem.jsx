import MyButton from "./UI/MyButton/MyButton";

const PostItem = (props) => {

    return (<div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className='post-btns'>
                    <MyButton onClick={() => props.remove(props.post)}>Deschide</MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>Sterge</MyButton>
                </div>
            </div>
        </div>

    )
}


export default PostItem