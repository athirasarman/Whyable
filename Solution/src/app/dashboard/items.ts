export interface Items {

  data: {
	items:Array<{
	        _id: string;
	        images:Array<string>;
	        deleted:boolean;
	        deactivated:boolean;
	        status:string;
	        availability:string;
	        location:string;
	        title:string;
	        rent_rate:number;
	        owner_id:string;
	        uploaded_by_me:boolean;
	        order_id:string;
	        borrowed_by_me:boolean;
	        borrowed_status:string;
          }>;
	totalCount:number;
  }
}
