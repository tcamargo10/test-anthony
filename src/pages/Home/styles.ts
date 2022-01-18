import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px; 
    width: 100%;
    border-bottom: 1px solid #E5E7EB;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px; 
    width: 100%;
    border-top: 1px solid #E5E7EB;
  }

  form {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .inputs-area {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    max-height: 350px;
  }

  .button {
    max-width: 400px;
    width: 100%;
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    margin: 35px 0px;
    height: 250px;
    width: 250px;
    border: 8px solid #E5E7EB;
    border-radius: 50%;
  }

  .avatar-image {
      height: 234px;
      width: 234px;
      border-radius: 50%;
  }

  .avatar-edit {
    position: absolute;
    top: 35%;
    right: -28px;
    height: 60px !important;
    width: 60px;
    border: 8px solid #E5E7EB;
    border-radius: 50%;
    background-color: #ffff;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: #2F4E78;
    }

    .icon-edit {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      width: 60px;
      cursor: pointer;
    }

    .input-file {
      display: none;
    }
  }
`;