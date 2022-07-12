import { Link } from 'react-router-dom';
import PostDetails from '../../components/PostDetails/PostDetails';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import styles from '../Search/Search.module.css';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');
  const { documents: posts } = useFetchDocuments('post', search);
  return (
    <div className={styles.searchContainer}>
      <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
