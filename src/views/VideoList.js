import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem } from '../components/List';
import { getLoadingSelector, getVideosSelector } from '../selectors/video';
import { loadAllVideos } from '../actions/video';

export const VideoList = ({ ...rest }) => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (location) {
      // Getting the search paramters from the url
      const description = queryString.parse(location.search).q;

      if (description) {
        dispatch(loadAllVideos(description));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const loading = useSelector(getLoadingSelector);
  const videos = useSelector(getVideosSelector);

  return (
    /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
    <List {...rest}>
      {!loading &&
        videos.length > 0 &&
        videos.map(video => (
          <Link key={video.id} to={`/${video.id}`}>
            <ListItem video={video} {...rest} />
          </Link>
        ))}
    </List>
  );
};
