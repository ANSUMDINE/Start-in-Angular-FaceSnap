export class FaceSnap
{
  constructor(
              public id: number,
              public title: string ,
              public description: string,
              public CreateDate: Date,
              public snaps: number,
              public imageUrl: string,
              public location?: string
    )
    {

    }
}
