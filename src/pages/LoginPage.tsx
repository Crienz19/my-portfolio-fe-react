import { 
    CCard, 
    CCardBody,
    CForm,
    CFormInput,
    CFormLabel,
    CRow,
    CButton
} from "@coreui/react"
import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector} from "../hooks/store-hooks";
import { login } from "../services/Auth";
import { authSelector } from "../store/authSlice";
import router from "../router";

export const LoginPage : React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();
    const { isRequestLoading, isSuccess } = useAppSelector(authSelector)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(login({ email, password}));

        alert(`Email: ${email} Password: ${password}`);
    }

    useEffect(() => {
        if(isSuccess && !isRequestLoading) {
            router.navigate('/dasbhboard');
        }
    }, [dispatch]);
    
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <CCard style={{ width: '400px' }}>
                <CCardBody style={{ padding: '20px 35px' }}>
                    <CForm onSubmit={handleSubmit}>
                        <CRow className="mb-3">
                            <CFormLabel className="p-0" htmlFor="email">E-mail</CFormLabel>
                            <CFormInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john.doe@app.com" />
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel className="p-0" htmlFor="password">Password</CFormLabel>
                            <CFormInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </CRow>
                        <CRow>
                            <CButton type="submit" color="primary" className="w-100">Login</CButton>
                        </CRow>
                    </CForm>
                </CCardBody>
           </CCard>
        </div>    
    )
}