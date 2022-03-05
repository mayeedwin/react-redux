import { CSSProperties } from "react";
import { connect } from "react-redux";
import "./message.css";

// Message component...
const Message = ({
  message,
  photos,
  style = {},
}: {
  message: string;
  photos: {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[];
  style?: CSSProperties;
}) => {
  return (
    <h1 className="message" style={style}>
      {message} ({photos.length})
    </h1>
  );
};

// Map component...
const mapStateToProps = (
  state: {
    photos: {
      data: {
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
      }[];
    };
  },
  ownState: {
    message: string;
  }
) => {
  return {
    photos: state.photos.data,
    ...ownState,
  };
}; 

export default connect(mapStateToProps)(Message);
