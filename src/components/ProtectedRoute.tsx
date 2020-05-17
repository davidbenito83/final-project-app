import React from "react";
import { useCan } from "../features/permissions/use-can";
import { Permission } from "../features/permissions/permission";
import { RoleContext } from "../features/role-context";

export const ProtectedRoute: React.FC = () => {
  const canDelete = useCan([Permission.DELETE_ENTITIES])
  const canSubscribe = useCan([Permission.CAN_SUBSCRIBE])
  const canEdit = useCan([Permission.CAN_EDIT_USER])
  const canEditAndSubscribe = useCan([Permission.CAN_EDIT_USER, Permission.CAN_SUBSCRIBE])

  return (
    <RoleContext.Consumer>
      {({ role, setRole }) => (
        <>
          <h1>Protegido</h1>
          <button onClick={() => setRole('superadmin')}>Cambiar a: Superadmin</button>
          <button onClick={() => setRole('admin')}>Cambiar a: Admin</button>
          <button onClick={() => setRole('user')}>Cambiar a: User</button>

          {canDelete && <p>Visible if can DELETE</p>}
          {canSubscribe && <p>Visible if can SUBSCRIBE</p>}
          {canEdit && <p>Visible if can EDIT USER</p>}
          {canEditAndSubscribe && <p>Visible if can EDIT USER and CAN SUBSCRIBE</p>}
        </>
      )}
    </RoleContext.Consumer>
  )
}