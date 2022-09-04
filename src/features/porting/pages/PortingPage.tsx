import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  selectUserLoading,
  selectUserList,
  userActions,
} from 'features/porting/portingSlice';
const Porting = () => {
  const userLoading = useAppSelector(selectUserLoading);
  const userList = useAppSelector(selectUserList);

  const dispatch = useAppDispatch();

  const handleGetUser = () => {
    dispatch(userActions.fetchUser());
  };

  return (
    <>
      <div>
        <>User Loading? </>
        <>{JSON.stringify(userLoading)}</>
      </div>
      <div>
        <button onClick={handleGetUser}>get user</button>
      </div>
      <div>
        <>User List: </>
        <div style={{ display: 'flex' }}>
          {userList.map((user) => {
            return (
              <div style={{ flex: 1 }}>
                <div>
                  Name: {user.firstName} {user.lastName}
                </div>
                <div>Sex: {user.sex}</div>
                <div>Age: {user.age}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Porting;
