import React, { Component } from "react";
// Extra import: CardImgOverlay below.
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {
            comments.map((comment) => (
              <p key={comment.id}>
                {comment.text} <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            ))
          }
        </div>
      );
    }
    // You always need a default return for a method/function that returns JSX. If no comments were present on a campground this app would fail to render.
    //  return <div />;
  }
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  RenderComments({comments, addComment, campsiteId}) {
    if (comments) {
        return (
          <div className="cold-md-5 m-1">
            <h4>Comments</h4>
            {comments.map(comment => {
              return (
                <div key={comment.id}>
                  <p>{comment.text} <br />
                    -- {comment.author},{new Intl.DateTimeFormat("en-US", {year: "numeric", month: "short", day: "2-digit"}).format(new Date(Date.parse(comment.date)))}
                  </p>
                </div>
              );
            })}
          </div>
        );
    }
    return <div />
}
  render() {
    if (this.props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}
}

export default CampsiteInfo;