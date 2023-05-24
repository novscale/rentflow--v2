import { Tenant as TTenant } from "../api/tenant/Tenant";

export const TENANT_TITLE_FIELD = "firstname";

export const TenantTitle = (record: TTenant): string => {
  return record.firstname || String(record.id);
};
