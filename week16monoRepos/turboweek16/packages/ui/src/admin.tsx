interface AdminProps {
    name:string
    
  }
  
  export const Admin = ({name}: AdminProps) => {
    return (
        <div>
            <h1>AMDIN PAGE={name}</h1>
        </div>
      
    );
  };