export interface MenuItem {
  id: string;
  tittle: string;
  children: MenuItem[];
  parentId?: string;
}
