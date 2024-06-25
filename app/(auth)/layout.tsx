const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;