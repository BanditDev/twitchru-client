import { RouterProps, withRouter } from 'next/router';
import { Component } from 'react';
import styled from 'styled-components';
import PostFullView from '../../components/PostHelper/FullView';
import Posts from '../../components/Posts';
import Streams from '../../components/Stream';
import PostProvider from '../../providers/Post';
import { Modal } from '../../ui/Modal';

const Grid = styled.div`
  width: 100%;
  display: grid;
  padding: 10px 30px;
  grid-template-columns: repeat(auto-fit, 300px);
  overflow-y: hidden;
`;

const SectionTitle = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 35px 0;
`;

interface IProps {
  router: RouterProps;
}

class TopDayPage extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    let postId = null;

    if (typeof this.props.router.query.postId === 'string') {
      postId = this.props.router.query.postId;
    }

    return (
      <>
        <Modal
          minimal
          isOpen={!!postId}
          onClose={() => this.props.router.back()}
        >
          <PostProvider id={postId}>
            {({ post }) => <PostFullView {...post} />}
          </PostProvider>
        </Modal>
        <Grid>
          <Streams />
        </Grid>
        <SectionTitle>Top за день</SectionTitle>
        <Grid>
          <Posts sort={'topDay'} />
        </Grid>
      </>
    );
  }
}

export default withRouter(TopDayPage);
