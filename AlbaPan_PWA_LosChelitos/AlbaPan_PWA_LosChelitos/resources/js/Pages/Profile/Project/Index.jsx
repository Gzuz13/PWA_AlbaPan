
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react'


export default function Index({auth, projects}){
     
    return(

        <AuthenticatedLayout
        user = {auth.user}
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Proyectos
        </h2>
        
        }
        >

            <Head title='Proyectos'> </Head>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Images Path</th>
                        <th>Created By</th>
                        <th>Updated By</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>{
                       projects.data.map((project) => (
                        <tr>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>{project.due_date}</td>
                            <td>{project.status}</td>
                            <td>{project.images_path}</td>
                            <td>{project.created_by}</td>
                            <td>{project.updated_by}</td>
                            <td>{project.created_at}</td>
                            <td>{project.updated_at}</td>
                            
                        </tr>
             
                    ))
                    }
                 
                </tbody>
            </table>


        </AuthenticatedLayout>
    )


}

