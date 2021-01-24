import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Comment.css';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            comment: []
        };
        this.commentHandler = this.commentHandler.bind(this);
    }

    //   Method for handling the comments & counts in the state
    commentHandler = (e) => {
        e.preventDefault();
        let comment = this.state.comment;
        let count = this.state.count + 1;
        let comments = this.comment.value;
        this.comment.value = "";
        comment.push(comments);
        this.setState({ comment: comment, count: count });
    }

    render() {
        return (
            <div className="comment-container">
                <form>
                    <textarea className="input-comment" ref={(c) => this.comment = c} name="comment" id="comment" rows="2" placeholder="Enter your comment here..."></textarea>
                </form>
                <button type="button" onClick={this.commentHandler}>Comment</button>
                <div className="comment-box">
                    <h4>Comments ({this.state.count})</h4>
                    {
                        //   Rendering the entered comment
                        this.state.comment.map((comment, index) => {
                            return <p className="comment" key={index}><i className="fa fa-user"></i> {comment}</p>
                        })
                    }
                </div>
            </div>
        );
    }

}
export default Comment;